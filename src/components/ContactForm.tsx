// ============================================================================
// CONTACTFORM.TSX ISSUES ANALYSIS
// ============================================================================

/* 
🚨 PROBLEMS IDENTIFIED:

1. DUPLICATE LABELS:
   - Input components expect a "label" prop but it's being set to empty string ""
   - Manual labels are created OUTSIDE the Input component
   - This creates duplicate label elements for the same input

2. ACCESSIBILITY ISSUES:
   - Manual labels use htmlFor but point to IDs
   - Input components create their own labels internally
   - This breaks screen reader functionality

3. INCONSISTENT PATTERN:
   - Using both manual labels AND Input component labels
   - Empty label props being passed to Input/TextArea components

4. REDUNDANT CODE:
   - Double labeling system creates unnecessary complexity
*/

// ============================================================================
// CLEANED VERSION - FIXED CONFLICTS
// ============================================================================

// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Input, TextArea, Button } from './ui';
import { useEmailJS } from '../hooks/useEmailJS';

export const ContactForm: React.FC = () => {
  const { send, sending, error, success } = useEmailJS();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Combine first and last name for the email service
    const emailData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: 'Portfolio Contact Form',
      message: formData.message
    };
    await send(emailData);
    if (success) {
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl text-center">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl text-center">
          {error.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div>
          <div className="block text-sm font-semibold text-[#050505] mb-4 font-nunito">
            Your Name <span className="text-[#515154] font-extralight">(required)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* Email Field */}
        <Input
          name="email"
          label="Your Email (required)"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        {/* Message Field */}
        <TextArea
          name="message"
          label="Your Message (required)"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
        
        <Button 
          type="submit" 
          className="w-full uppercase"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </>
  );
};