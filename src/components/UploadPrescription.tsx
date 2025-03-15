
import React, { useState } from "react";
import { Upload, X, Check, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const UploadPrescription = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };
  
  const handleFiles = (file: File) => {
    // Check file type - only allow images and PDFs
    if (!file.type.match('image.*') && file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload an image or PDF file.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size - limit to 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);
    
    // Create preview for images only
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      // For PDFs, just show an icon
      setPreview(null);
    }
  };
  
  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would upload the file to a server here
    toast({
      title: "Prescription Uploaded Successfully!",
      description: "We'll process your prescription and contact you soon.",
    });
    
    // Reset form
    removeFile();
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
          <FileText className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Upload Your Prescription</h3>
        <p className="text-foreground/70 max-w-md mx-auto">
          Simply upload your prescription, and we'll have your medications ready for pickup 
          or deliver them to your doorstep.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload Area */}
        <div className="space-y-4">
          <Label htmlFor="prescription">Prescription</Label>
          
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 ${
              dragActive 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/50 hover:bg-primary/5"
            } transition-colors text-center`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Input
              id="prescription"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required={!file}
              disabled={!!file}
            />
            
            {!file ? (
              <div className="flex flex-col items-center justify-center py-4">
                <Upload className="h-10 w-10 text-primary/70 mb-2" />
                <p className="text-lg font-medium mb-1">
                  Drag & drop or click to upload
                </p>
                <p className="text-sm text-foreground/60">
                  Support for JPG, PNG, and PDF (Max 5MB)
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-2">
                {preview ? (
                  <img 
                    src={preview} 
                    alt="Prescription preview" 
                    className="max-h-40 max-w-full object-contain mb-3 rounded"
                  />
                ) : (
                  <FileText className="h-12 w-12 text-primary/70 mb-2" />
                )}
                
                <div className="flex flex-col items-center">
                  <p className="text-base font-medium mb-1 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    {file.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                    onClick={removeFile}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Personal Information */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+91 1234567890" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="delivery">Delivery Preference</Label>
            <select 
              id="delivery" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select an option</option>
              <option value="pickup">Store Pickup</option>
              <option value="delivery">Home Delivery</option>
            </select>
          </div>
        </div>
        
        {/* Special Instructions */}
        <div className="space-y-2">
          <Label htmlFor="instructions">Special Instructions (Optional)</Label>
          <textarea 
            id="instructions" 
            placeholder="Any specific requirements or notes for your prescription..."
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button type="submit" className="flex-1 space-x-2">
            <Upload className="h-4 w-4" />
            <span>Submit Prescription</span>
          </Button>
          
          <Button type="button" variant="outline" className="flex-1 space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Schedule Appointment</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadPrescription;
