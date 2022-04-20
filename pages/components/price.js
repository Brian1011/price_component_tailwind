export default function PriceComponent() {
  return (
    <div className="bg-black sm:h-screen min-h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex flex-col items-center justify-center mx-6 xl-mx-0">
        {/*Break points*/}
        <div className="text-white text-4xl py-6 text-center">
          <div className="xs:flex flex-inline sm:hidden">XS Screen size</div>
          <div className="hidden sm:flex sm:flex-inline md:hidden">
            Small Screen size
          </div>
          <div className="hidden md:flex md:flex-inline lg:hidden">
            Medium Screen size
          </div>
          <div className="hidden lg:flex lg:flex-inline xl:hidden">
            Large screen size
          </div>
          <div className="hidden xl:flex xl:flex-inline">XL Screen</div>
        </div>

        {/*Black background*/}
        <div className="md:flex md:flex-row w-full xl:w-2/3 xl:h-2/3 bg-red-700 rounded-lg xl:mx-0 mb-4 md:mb-0">
          {/*1ST CARD*/}
          <div className="flex flex-col md:w-1/2 w-full lg:p-10 my-12 text-white md:border-r border-gray-700 items-center justify-center">
            <div className="w-2/3">
              <div className="text-4xl font-bold">Basic</div>
              <div className="text-2xl font-bold pt-4">Free</div>
              <div className="text-lg">3,000 monthly visitors</div>
              <div className="py-12">
                <ul className="list-disc text-white">
                  <li>Limited reports</li>
                  <li>Unlimited projects</li>
                  <li>Data storage for 1 year</li>
                </ul>
              </div>

              <div className="border rounded-md border-white">
                <div className="py-4 text-white flex justify-center text-lg">
                  Start now
                </div>
              </div>
            </div>
          </div>

          {/*2ND Card*/}
          <div className="flex flex-col md:w-1/2 w-full lg:p-10 my-12 text-white items-center justify-center">
            <div className="w-2/3">
              <div className="text-4xl font-bold">Pro</div>
              <div className="text-2xl font-bold pt-4">$19 / month</div>
              <div className="text-lg">1,000 monthly visitors</div>
              <div className="py-12">
                <ul className="list-disc text-white">
                  <li>Unlimited reports</li>
                  <li>15-days free trial</li>
                  <li>Data storage for 3 years</li>
                </ul>
              </div>

              <div
                className="rounded-md border border-red-600"
                style={{ background: "red" }}
              >
                <div className="py-4 text-white flex justify-center text-lg">
                  Try it
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
