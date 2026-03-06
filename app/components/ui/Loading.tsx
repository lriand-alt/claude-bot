export const Loading = () => {
    return (
        <div className="flex justify-start">
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
    )
}