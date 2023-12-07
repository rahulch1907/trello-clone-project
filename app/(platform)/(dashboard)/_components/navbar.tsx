import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

export const Navbar = () => {
    return (
      <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-md bg-slate-100 flex items-center">
        <MobileSidebar />
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <FormPopover align="start" side="bottom" sideOffset={18}>
            <Button
              variant="primary"
              size="sm"
              className="rounded-xl hidden md:block h-auto py-1.5 px-2"
            >
              Create
            </Button>
          </FormPopover>
          <FormPopover align="start" side="bottom">
            <Button
              variant="primary"
              size="sm"
              className="rounded-lg block md:hidden hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </FormPopover>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
          <div className="hover:bg-slate-300 rounded-lg text-black hover:shadow-md">
            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl="/organization/:id"
              afterSelectOrganizationUrl="/organization/:id"
              afterLeaveOrganizationUrl="/select-org"
              appearance={{
                elements: {
                  rootBox: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
              }}
            />
          </div>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 35,
                  width: 35,
                },
              },
            }}
          />
        </div>
      </nav>
    );
};
 