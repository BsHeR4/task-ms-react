import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Pagination = ({ currentPage, lastPage, onPageChange, className = "", }) => {

    if (lastPage <= 1) return null

    const pages = Array.from({ length: lastPage }, (_, i) => i + 1)

    return (
        <ul className={`flex justify-between w-full items-center gap-1 select-none ${className}`}>

            {/* Previous */}
            <li
                role="button"
                aria-disabled={currentPage === 1}
                className={`flex items-center text-xl gap-2 text-white ${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            >
                <IoMdArrowRoundBack /> Previous
            </li>

            {/* Page numbers */}
            <div className="flex gap-1">
                {pages.map((page) => {
                    const isActive = page === currentPage

                    return (
                        <li
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`flex h-9 min-w-9 items-center justify-center rounded-md text-sm font-medium transition
                                 ${isActive ? "border-zinc-900 bg-zinc-100 text-zinc-900"
                                    : "cursor-pointer text-white hover:bg-zinc-100 hover:text-zinc-900"}`}
                        >
                            {page}
                        </li>
                    )
                })}
            </div>

            {/* Next */}
            <li
                aria-disabled={currentPage === lastPage}
                className={`flex items-center text-xl gap-2 text-white 
                    ${currentPage === lastPage ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => currentPage < lastPage && onPageChange(currentPage + 1)}
            >
                Next <IoMdArrowRoundForward />
            </li>

        </ul>
    )
}

export default Pagination