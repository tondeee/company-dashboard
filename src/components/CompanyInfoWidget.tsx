import { useState } from 'react';
import { ScrollArea } from './ui/scorll-area';
import { useCompanies } from '../hooks/useCompanies';

const CompanyInfoWidget = () => {
  const [selectedTicker, setSelectedTicker] = useState('AAPL');
  const { data: companies, isLoading, error } = useCompanies();

  if (isLoading) return <div className="p-4">Loading companies...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading data</div>;
  if (!companies || companies.length === 0) return <div className="p-4">No companies found</div>;

  const selectedCompany = companies?.find(
    company => company.ticker === selectedTicker
  );

  return (
    <div className="p-4 space-y-4 h-full  flex flex-col   ">
      <select 
        value={selectedTicker}
        onChange={(e) => setSelectedTicker(e.target.value)}
        className="w-full p-2 border rounded"
      >
        {companies?.map(company => (
          <option key={company.ticker} value={company.ticker}>
            {company.name} ({company.ticker})
          </option>
        ))}
      </select>
      <ScrollArea className='flex-1 '>

      {selectedCompany && (
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{selectedCompany.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Basic Information</h3>
              <p>ID: {selectedCompany.id}</p>
              <p>Ticker: {selectedCompany.ticker}</p>
              <p>Legal Name: {selectedCompany.legal_name}</p>
              <p>LEI: {selectedCompany.lei}</p>
              <p>Stock Exchange: {selectedCompany.stock_exchange}</p>
              <p>SIC: {selectedCompany.sic}</p>
              <p>CEO: {selectedCompany.ceo}</p>
              <p>Entity Status: {selectedCompany.entity_status}</p>
              <p>Entity Legal Form: {selectedCompany.entity_legal_form}</p>
              <p>CIK: {selectedCompany.cik}</p>
              <p>Latest Filing Date: {selectedCompany.latest_filing_date}</p>
              <p>Employees: {selectedCompany.employees?.toLocaleString()}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Contact Information</h3>
              <p>Website: <a href={`https://${selectedCompany.company_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{selectedCompany.company_url}</a></p>
              <p>Business Phone: {selectedCompany.business_phone_no}</p>
              <p>Business Address: {selectedCompany.business_address}</p>
              <p>Mailing Address: {selectedCompany.mailing_address}</p>
              <p>HQ Address: {[selectedCompany.hq_address1, selectedCompany.hq_address2, selectedCompany.hq_address_city, selectedCompany.hq_address_postal_code].filter(Boolean).join(', ')}</p>
              <p>HQ State: {selectedCompany.hq_state}</p>
              <p>HQ Country: {selectedCompany.hq_country}</p>
              <p>Incorporation State: {selectedCompany.inc_state}</p>
              <p>Incorporation Country: {selectedCompany.inc_country}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Industry Classification</h3>
              <p>Sector: {selectedCompany.sector}</p>
              <p>Industry Category: {selectedCompany.industry_category}</p>
              <p>Industry Group: {selectedCompany.industry_group}</p>
              <p>Legacy Sector: {selectedCompany.legacy_sector}</p>
              <p>Legacy Industry Category: {selectedCompany.legacy_industry_category}</p>
              <p>Legacy Industry Group: {selectedCompany.legacy_industry_group}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Additional Information</h3>
              <p>Template: {selectedCompany.template}</p>
              <p>Standardized Active: {selectedCompany.standardized_active.toString()}</p>
              <p>First Fundamental Date: {selectedCompany.first_fundamental_date}</p>
              <p>Last Fundamental Date: {selectedCompany.last_fundamental_date}</p>
              <p>First Stock Price Date: {selectedCompany.first_stock_price_date}</p>
              <p>Last Stock Price Date: {selectedCompany.last_stock_price_date}</p>
              <p>THEA Enabled: {selectedCompany.thea_enabled.toString()}</p>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
              <h3 className="font-semibold">Short</h3>
              <p className="text-sm text-gray-600">{selectedCompany.short_description}</p>
              <h3 className="font-semibold">Long description</h3>
              <p className="text-sm text-gray-600">{selectedCompany.long_description}</p>
            </div>
          </div>
        </div>
      )}
      </ScrollArea>
    </div>
  );
}

export default CompanyInfoWidget;