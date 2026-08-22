import {
    Pagination as BootstrapPagination
} from "react-bootstrap";

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange
}) => {

    if (totalPages <= 1) {
        return null;
    }

    const changePage = (page) => {

        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        if (onPageChange) {
            onPageChange(page);
        }
    };

    const pages = [];

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        pages.push(page);

    }

    return (

        <BootstrapPagination className="justify-content-center mt-4">

            <BootstrapPagination.First
                disabled={currentPage === 1}
                onClick={() => changePage(1)}
            />

            <BootstrapPagination.Prev
                disabled={currentPage === 1}
                onClick={() =>
                    changePage(currentPage - 1)
                }
            />

            {pages.map((page) => (

                <BootstrapPagination.Item
                    key={page}
                    active={
                        page === currentPage
                    }
                    onClick={() =>
                        changePage(page)
                    }
                >
                    {page}
                </BootstrapPagination.Item>

            ))}

            <BootstrapPagination.Next
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    changePage(currentPage + 1)
                }
            />

            <BootstrapPagination.Last
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    changePage(totalPages)
                }
            />

        </BootstrapPagination>
    );
};

export default Pagination;