  "use client";

  import { useRouter } from "next/navigation"; // Use router for navigation
  import { ArrowRightIcon, UserPlusIcon } from "lucide-react"; // Import Lucide icons
  import { Button } from "@/components/ui/button"; // Assuming you have a Button component from ShadCN
  import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Assuming you have Card components from ShadCN

  export default function UserLogin() {
    const router = useRouter();

    // Handle redirect to SignIn page
    const handleSignIn = () => {
      router.push("/signin");
    };

    // Handle redirect to SignUp page
    const handleSignUp = () => {
      router.push("/signup");
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="max-w-sm w-full p-8">
          <CardHeader className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">Welcome</h2>
            <p className="text-gray-600">Please choose an option to continue.</p>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Sign In Button */}
            <Button
              variant="default"
              className="w-full flex items-center justify-between bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleSignIn}
            >
              Sign In
              <ArrowRightIcon className="ml-2" />
            </Button>

            {/* Sign Up Button */}
            <Button
              variant="default"
              className="w-full flex items-center justify-between bg-green-600 text-white hover:bg-green-700"
              onClick={handleSignUp}
            >
              Sign Up
              <UserPlusIcon className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
