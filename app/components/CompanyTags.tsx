interface CompanyTagsProps {
    companies: string[];
    selectedCompany: string | null;
    onSelectCompany: (company: string) => void;
  }
  
  export default function CompanyTags({ companies, selectedCompany, onSelectCompany }: CompanyTagsProps) {
    return (
      <div className="flex gap-3 mb-8">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => onSelectCompany(company)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCompany === company
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {company}
          </button>
        ))}
      </div>
    );
  } 