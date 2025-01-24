import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import CompanyInfoWidget from './components/CompanyInfoWidget';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-full">
        <Mosaic<string>
          renderTile={(id, path) => (
            <MosaicWindow<string> path={path} title={`Company Info`}>
              <CompanyInfoWidget/>
            </MosaicWindow>
          )}
          initialValue={{
            direction: 'row',
            first: '1',
            second: {
              direction: 'column',
              first: '2',
              second: '3'
            }
          }}
        />
      </div>
    </QueryClientProvider>
  );
}