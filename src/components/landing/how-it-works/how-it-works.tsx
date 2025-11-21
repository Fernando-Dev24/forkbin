import { Button } from "@/components/ui";

export const HowItWorks = () => {
  return (
    <div className="my-48">
      <div className="text-center mb-24 md:mb-32">
        <h2 className="text-5xl font-medium">How it works</h2>
        <p className="mt-2 text-2xl font-light">
          Before you sign up, please let me explain how to use your bins
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5">
        {/* EXPLANATION 1 */}
        <div>
          <figure className="w-[250px] md:w-[300px] block mx-auto">
            <img
              src="/functionality-1.svg"
              alt="create user explanation"
              className="w-full"
            />
          </figure>

          <div className="mt-5 text-center">
            <h5 className="text-2xl font-medium">Create user</h5>
            <p className="w-1/2 block mx-auto font-light">
              Enter your information ensure that your details are safe and more
              secure
            </p>
          </div>
        </div>

        {/* EXPLANATION 2 */}
        <div>
          <figure className="w-[250px] block mx-auto">
            <img
              src="/functionality-2.svg"
              alt="create user explanation"
              className="w-full"
            />
          </figure>

          <div className="mt-5 text-center">
            <h5 className="text-2xl font-medium">Fork & edit</h5>
            <p className="w-1/2 block mx-auto font-light">
              Fork an existing bin, or create a new one instead. All data is
              100% safe and deliver as you need
            </p>
          </div>
        </div>

        {/* EXPLANATION 3 */}
        <div>
          <figure className="w-[250px] md:w-[300px] block mx-auto">
            <img
              src="/functionality-3.svg"
              alt="create user explanation"
              className="w-full"
            />
          </figure>

          <div className="mt-5 text-center">
            <h5 className="text-2xl font-medium">Use your bin</h5>
            <p className="w-1/2 block mx-auto font-light">
              Code your next app using our secure API at anytime you need
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="default">Start forking now</Button>
      </div>
    </div>
  );
};
