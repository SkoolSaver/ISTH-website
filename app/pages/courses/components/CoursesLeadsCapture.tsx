'use client'

import React, { useState, useEffect } from 'react';
import { appPalette } from '@/theme/palette';

const countryCodes = [
  { code: '+1', label: 'USA' },
  { code: '+91', label: 'India' },
  { code: '+44', label: 'UK' },
  { code: '+966', label: 'Saudi' },
  { code: '+971', label: 'UAE' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+65', label: 'Singapore' },
  { code: '+353', label: 'Ireland' },
  { code: '+61', label: 'Australia' },
];

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  courseTitle: string;
  actionType: 'register' | 'curriculum';
}

export default function LeadCaptureModal({ isOpen, onClose, onSubmit, courseTitle, actionType }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    program: courseTitle,
    consent: true
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, program: courseTitle }));
    }
  }, [isOpen, courseTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div 
        className="bg-gray-100 relative w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-400">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl leading-none hover:opacity-70 transition-opacity"
            style={{ color: appPalette.text.secondary }}
          >
            &times;
          </button>
          <h3 className="text-xl font-bold" style={{ color: appPalette.text.main }}>
            {actionType === 'register' ? 'Complete Registration' : 'Download Curriculum'}
          </h3>
          <p className="text-sm mt-1" style={{ color: appPalette.text.secondary }}>
            Please fill in your details to proceed with {courseTitle}.
          </p>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">
          <style>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover, 
              input:-webkit-autofill:focus, 
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px ${appPalette.background.main} inset !important;
                -webkit-text-fill-color: ${appPalette.text.main} !important;
                transition: background-color 5000s ease-in-out 0s;
              }
            `}</style>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input w-full placeholder:text-gray-400 border focus:outline-gray-400 px-sm"
              style={{ 
                backgroundColor: appPalette.background.main, 
                color: appPalette.text.main 
              }}
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full placeholder:text-gray-400 border focus:outline-gray-400 px-sm"
              style={{ 
                backgroundColor: appPalette.background.main, 
                color: appPalette.text.main 
              }}
            />

            {/* Program Interested Input */}
            <input
              type="text"
              name="program"
              placeholder="Program interested"
              value={formData.program}
              onChange={handleChange}
              readOnly
              className="input w-full placeholder:text-gray-400 opacity-70 cursor-not-allowed focus:outline-gray-400 px-sm"
              style={{ 
                backgroundColor: appPalette.background.main, 
                color: appPalette.text.main 
              }}
            />

            {/* Phone Input */}
            <div className="join w-full">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="select"
                style={{ 
                  backgroundColor: appPalette.background.main, 
                  color: appPalette.text.main 
                }}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input w-full placeholder:text-gray-400 focus:outline-gray-400 px-sm"
                style={{ 
                  backgroundColor: appPalette.background.main, 
                  color: appPalette.text.main 
                }}
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start pt-2">
              <label className="label cursor-pointer justify-start gap-2 p-0">
                <input
                  type="checkbox"
                  name="consent"
                  id="modal_sms_consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="checkbox checkbox-sm"
                  style={{ 
                    borderColor: appPalette.border.main,
                    '--chkbg': appPalette.active.accent,
                    '--chkfg': appPalette.active.light
                  } as React.CSSProperties}
                />
                <span className="label-text text-xs sm:text-sm text-left" style={{ color: appPalette.text.secondary }}>
                  Receive SMS & Whatsapp communications on this number.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-base font-semibold shadow-md border-none hover:opacity-90"
              style={{ backgroundColor: appPalette.active.accent, color: appPalette.active.light }}
            >
              {actionType === 'register' ? 'Proceed to Registration ❯' : 'Download Curriculum ❯'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
