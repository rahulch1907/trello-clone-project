import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return ( 
        <div className="w-medium">
            <OrganizationProfile 
              appearance={{
                elements: {
                    rootBox: {
                        boxShadow: "none",
                        width: "100%"
                    },
                    card: {
                        border: "3px solid #e5e5e5",
                        boxShadow: "none",
                        width: "100%"
                    }
                }
              }}
            />
        </div>
     );
}
 
export default SettingsPage;