import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Container() {
  return (
    <div className="h-screen overflow-hidden">
      <TopBar />
      <div className="h-full flex overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Sidebar />
        <div className="flex flex-col w-0 overflow-hidden">
            <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
                {/* /End replace */}
                </div>
            </div>
            </main>
        </div>
      </div>
    </div>
  )
}
