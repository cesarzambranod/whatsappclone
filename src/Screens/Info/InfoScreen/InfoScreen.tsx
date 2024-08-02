import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactInfo } from "../../../Componets/Contacts";
const queryClient = new QueryClient();
const InfoScreen = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ContactInfo />
		</QueryClientProvider>
	);
};

export default InfoScreen;
