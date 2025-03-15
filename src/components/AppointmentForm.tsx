
import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const appointmentTypes = [
  { value: "general", label: "General Consultation" },
  { value: "medication", label: "Medication Review" },
  { value: "vaccination", label: "Vaccination" },
  { value: "chronic", label: "Chronic Disease Management" },
  { value: "wellness", label: "Wellness Check" }
];

const AppointmentForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send this data to an API
    toast({
      title: "Appointment Scheduled!",
      description: `Your appointment has been confirmed for ${date ? format(date, "MMMM d, yyyy") : ""} at ${selectedTime}.`,
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
    setDate(undefined);
    setSelectedTime(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
          <CalendarIcon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Schedule an Appointment</h3>
        <p className="text-foreground/70 max-w-md mx-auto">
          Book an appointment with our healthcare professionals for consultations, 
          medication reviews, or other health services.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="appointment-name">Full Name</Label>
            <Input id="appointment-name" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointment-phone">Phone Number</Label>
            <Input id="appointment-phone" placeholder="+91 1234567890" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointment-email">Email Address</Label>
            <Input 
              id="appointment-email" 
              type="email" 
              placeholder="john@example.com" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointment-type">Appointment Type</Label>
            <select 
              id="appointment-type" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select an option</option>
              {appointmentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Date Selection */}
        <div className="space-y-2">
          <Label>Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable past dates and Sundays
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  return date < now || date.getDay() === 0;
                }}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Time Selection */}
        <div className="space-y-2">
          <Label>Select Time</Label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? "default" : "outline"}
                className={`text-sm ${
                  selectedTime === time 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/5"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                <Clock className={`h-3.5 w-3.5 mr-1 ${selectedTime === time ? "text-current" : "text-primary"}`} />
                {time}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Special Requirements */}
        <div className="space-y-2">
          <Label htmlFor="appointment-notes">Special Requirements (Optional)</Label>
          <textarea 
            id="appointment-notes" 
            placeholder="Let us know if you have any specific needs or concerns..."
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full flex items-center justify-center space-x-2"
          disabled={!date || !selectedTime}
        >
          <Check className="h-4 w-4" />
          <span>Confirm Appointment</span>
        </Button>
        
        <p className="text-sm text-foreground/60 text-center">
          By scheduling an appointment, you agree to our cancellation policy. 
          Please provide at least 24 hours notice for cancellations.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
