import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopBar() {
    const { theme } = useTheme()

    return (
        <Disclosure as="nav" className="bg-white dark:bg-gray-900 shadow">
        {({ open }) => (
            <>
            <div className="bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {theme !== 'dark' ? 
                        <>
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="/images/u_icon.png"
                                alt="Black U Icon"
                            />
                            <img
                                className="hidden lg:block h-12 w-auto"
                                src="/images/untitled_logo_black.png"
                                alt="Black Untitled Logo"
                            />
                        </> 
                    :
                        <>
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="/images/u_icon_white.png"
                                alt="Black U Icon"
                            />
                            <img
                                className="hidden lg:block h-12 w-auto"
                                src="/images/untitled_logo_white.png"
                                alt="Black Untitled Logo"
                            />
                        </>
                    }
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <button
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span>New Stack</span>
                    </button>
                    </div>

                    <div className="ml-4 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>

                    <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                        <>
                            <div>
                            <Menu.Button className="bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                <span className="sr-only">Open user menu</span>
                                <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                />
                            </Menu.Button>
                            </div>
                            <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700 dark:text-gray-100'
                                    )}
                                    >
                                    Your Profile
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-900 dark:text-gray-100'
                                    )}
                                    >
                                    Settings
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700 dark:text-gray-100'
                                    )}
                                    >
                                    Sign out
                                    </a>
                                )}
                                </Menu.Item>
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>
                    </div>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="md:hidden">
                <div className="pt-2 pb-3 space-y-1">
                {/* Current: "bg-purple-50 border-purple-500 text-purple-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                    Dashboard
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                    Team
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                    Projects
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                    Calendar
                </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-800">
                <div className="flex items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    </div>
                    <div className="ml-3">
                    <div className="text-base font-medium text-gray-900 dark:text-gray-100">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-300 dark:text-gray-500">tom@example.com</div>
                    </div>
                    <button className="ml-auto flex-shrink-0 bg-white dark:bg-gray-900 p-1 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1">
                    <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    >
                    Your Profile
                    </a>
                    <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    >
                    Settings
                    </a>
                    <a
                    href="#"
                    className="border-transparent text-gray-700 hover:bg-gray-100 hover:border-purple-500 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-purple-500 dark:hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    >
                    Sign out
                    </a>
                </div>
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}