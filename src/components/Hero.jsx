import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const steps = [
  {
    id: '01',
    name: 'Job Details',
    description: 'Vitae sed mi luctus laoreet.',
    href: '#',
    status: 'current',
  },
  {
    id: '02',
    name: 'Application form',
    description: 'Cursus semper viverra.',
    href: '#',
    status: 'upcoming',
  },
  {
    id: '03',
    name: 'Preview',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Hero() {
  return (
    <div className="relative py-5 ">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div class="mb-8 rounded-2xl bg-indigo-500/10 lg:border-b lg:border-t lg:border-gray-200">
          <nav
            class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            aria-label="Progress"
          >
            <ol
              role="list"
              class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-r lg:border-gray-200"
            >
              <li class="relative overflow-hidden lg:flex-1">
                <div class="overflow-hidden rounded-t-md border border-b-0 border-gray-200 lg:border-0">
                  <a href="#" aria-current="step">
                    <span
                      class="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    ></span>
                    <span class="flex items-start px-6 py-5 text-sm font-medium">
                      <span class="flex-shrink-0">
                        <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                          <span class="text-indigo-600">01</span>
                        </span>
                      </span>
                      <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span class="text-sm font-medium text-indigo-600">
                          Job Details
                        </span>
                        <span class="text-sm font-medium text-gray-500">
                          Vitae sed mi luctus laoreet.
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </li>
              <li class="relative overflow-hidden lg:flex-1">
                <div class="overflow-hidden border border-gray-200 lg:border-0">
                  <a href="#" class="group">
                    <span
                      class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    ></span>
                    <span class="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
                      <span class="flex-shrink-0">
                        <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                          <span class="text-gray-500">02</span>
                        </span>
                      </span>
                      <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span class="text-sm font-medium text-gray-500">
                          Application form
                        </span>
                        <span class="text-sm font-medium text-gray-500">
                          Cursus semper viverra.
                        </span>
                      </span>
                    </span>
                  </a>
                  <div
                    class="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      viewBox="0 0 12 82"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.5 0V31L10.5 41L0.5 51V82"
                        stroke="currentcolor"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </div>
                </div>
              </li>
              <li class="relative overflow-hidden lg:flex-1">
                <div class="overflow-hidden rounded-b-md border border-t-0 border-gray-200 lg:border-0">
                  <a href="#" class="group">
                    <span
                      class="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    ></span>
                    <span class="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
                      <span class="flex-shrink-0">
                        <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                          <span class="text-gray-500">03</span>
                        </span>
                      </span>
                      <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span class="text-sm font-medium text-gray-500">
                          Preview
                        </span>
                        <span class="text-sm font-medium text-gray-500">
                          Penatibus eu quis ante.
                        </span>
                      </span>
                    </span>
                  </a>
                  <div
                    class="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      viewBox="0 0 12 82"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.5 0V31L10.5 41L0.5 51V82"
                        stroke="currentcolor"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </div>
                </div>
              </li>
            </ol>

            <form
              style={{ backgroundImage: 'url(background.jpg)' }}
              className="my-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
            >
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </nav>
        </div>
      </Container>
    </div>
  )
}
