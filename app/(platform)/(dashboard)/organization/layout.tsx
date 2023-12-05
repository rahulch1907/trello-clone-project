import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
      <main className="pt-20 md:pt-24 md:pl-8 xl:pl-20 3xl:pl-48 px-4 pr-16 max-w-8xl 3xl:max-w-screen-xl ml-auto">
        <div className="flex gap-x-7">
            <div className="w-64 shrink-0 hidden md:block ">
                <Sidebar />
            </div>
            {children}
        </div>
      </main>
    );
};

export default OrganizationLayout;