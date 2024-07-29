import  {ContactInfo} from '@/Componets/Contacts'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const InfoScreen = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ContactInfo />
		</QueryClientProvider>
	);
};

export default InfoScreen;
