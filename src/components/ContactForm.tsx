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
          <label className="block text-sm font-semibold text-[#050505] mb-2 font-nunito">
            Your Name <span className="text-red-500">(required)</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs text-[#515154] mb-1 font-nunito">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                label=""
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs text-[#515154] mb-1 font-nunito">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                label=""
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#050505] mb-2 font-nunito">
            Your Email <span className="text-red-500">(required)</span>
          </label>
          <Input
            id="email"
            name="email"
            label=""
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#050505] mb-2 font-nunito">
            Your Message <span className="text-red-500">(required)</span>
          </label>
          <TextArea
            id="message"
            name="message"
            label=""
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
          />
        </div>
        
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