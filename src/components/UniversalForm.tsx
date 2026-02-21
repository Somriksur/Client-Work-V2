interface UniversalFormProps {
  formHeading: string;
  buttonText: string;
  pageId: string;
}

export function UniversalForm({ formHeading, buttonText, pageId }: UniversalFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-5 w-full">
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
        {formHeading}
      </h2>
      
      <form className="space-y-2.5 sm:space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded-lg text-[11px] sm:text-xs text-gray-400 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        
        {/* Business Email */}
        <div>
          <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
            Business Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Business Email"
            className="w-full px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded-lg text-[11px] sm:text-xs text-gray-400 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        
        {/* Phone Number */}
        <div>
          <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
            Phone Number
          </label>
          <div className="flex">
            <div className="flex items-center justify-center px-2 py-1.5 sm:py-2 border-2 border-r-0 border-gray-300 rounded-l-lg bg-white text-gray-700 font-medium text-[11px] sm:text-xs">
              +91
            </div>
            <input
              type="tel"
              placeholder="0000 000 000"
              className="flex-1 px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded-r-lg text-[11px] sm:text-xs text-gray-400 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>
        
        {/* Privacy Policy Checkbox */}
        <div className="flex items-start pt-1">
          <input
            type="checkbox"
            id={`privacy-${pageId}`}
            className="mt-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-gray-300 rounded focus:ring-0 focus:ring-offset-0 flex-shrink-0"
          />
          <label htmlFor={`privacy-${pageId}`} className="ml-1.5 text-[9px] sm:text-[10px] text-gray-700 leading-tight">
            I agree to the Privacy Policy and consent to being contacted.
          </label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-2 sm:py-2.5 rounded-lg transition-all text-[11px] sm:text-xs uppercase tracking-wide mt-2"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
