import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <div className="App">
            <h1>Hello world</h1>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
