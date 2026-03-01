interface UniversalFormMobileProps {
  formHeading: string;
  buttonText: string;
  pageId: string;
}

export function UniversalFormMobile({ formHeading, buttonText, pageId }: UniversalFormMobileProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {formHeading}
      </h2>
      
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-base text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        
        {/* Business Email */}
        <div>
          <label className="block text-base text-gray-700 font-semibold mb-2">
            Business Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Business Email"
            className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        
        {/* Phone Number */}
        <div>
          <label className="block text-base text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <div className="flex">
            <div className="flex items-center justify-center px-4 py-3.5 border-2 border-r-0 border-gray-300 rounded-l-lg bg-white text-gray-700 font-medium text-base">
              +91
            </div>
            <input
              type="tel"
              placeholder="0000 000 000"
              className="flex-1 px-4 py-3.5 border-2 border-gray-300 rounded-r-lg text-base text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>
        
        {/* Privacy Policy Checkbox */}
        <div className="flex items-start pt-2">
          <input
            type="checkbox"
            id={`privacy-mobile-${pageId}`}
            className="mt-1 w-5 h-5 border-2 border-gray-300 rounded focus:ring-0 focus:ring-offset-0 flex-shrink-0"
          />
          <label htmlFor={`privacy-mobile-${pageId}`} className="ml-3 text-sm text-gray-600 leading-relaxed">
            I agree to the Privacy Policy and consent to being contacted.
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-4 rounded-lg transition-all text-base uppercase tracking-wide mt-4"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
