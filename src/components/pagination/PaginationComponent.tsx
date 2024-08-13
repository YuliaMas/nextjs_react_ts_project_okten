'use client';
import React from 'react';
import {useSearchParams} from "next/navigation";
import {movieService} from "@/services/api.service";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const DEFAULT_PAGE = 1;

const PaginationComponent = async () => {
    // :FC<IProps> = ({totalItems, itemsPerPage, currentPage, setCurrentPage})
    let searchParams = useSearchParams();
    let page= Number(searchParams.get('page')) ?? DEFAULT_PAGE;

    let res = await movieService.getMoviesPages();
    console.log(res.total_pages);

    // [ 'page', 'results', 'total_pages', 'total_results' ]

    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <PaginationItem>
                    <PaginationPrevious href={`/movies?page=${page - 1}`} />
                </PaginationItem>)
                }
                {page > 1 && (
                <PaginationItem>
                    <PaginationLink href={`/movies?page=${page-1}`} >
                        {page-1}
                    </PaginationLink>
                </PaginationItem>)
                }
                <PaginationItem>
                    <PaginationLink href={`/movies?page=${page}`} isActive>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink  href={`/movies?page=${page+1}`}>{page +1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                { page <= res.total_pages && (
                    <PaginationItem>
                        <PaginationNext href={`/movies?page=${page + 1}`} />
                    </PaginationItem>)
                }
            </PaginationContent>
        </Pagination>
    )
};

export default PaginationComponent;