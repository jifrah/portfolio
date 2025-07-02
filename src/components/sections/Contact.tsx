import React, { useState } from 'react';
import { Section, Container, Input, TextArea, Button } from '../ui';
import { useEmailJS } from '../../hooks/useEmailJS';

export const Contact: React.FC = () => {
  const { send, sending, error, success } = useEmailJS();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await send(formData);
    if (success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section id="contact" variant="lighter">
      <Container maxWidth="sm">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          Contact
        </h2>
        
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
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
          
          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            required
          />
          
          <TextArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={6}
            required
          />
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Container>
    </Section>
  );
};