import { QueryClientProvider } from 'react-query'
import Layout from './components/Layout/Layout'
import { queryClient } from './queryClient'
import { Routing } from './router/router'

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
                <Routing />
        </QueryClientProvider>
    )
}

export default App;