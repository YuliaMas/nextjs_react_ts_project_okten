'use client';
import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {usePathname, useSearchParams} from "next/navigation";


const PaginationComponent = ({page, totalPages}) => {
    let path = usePathname();
    totalPages>500 ? totalPages = 500: totalPages;
    console.log(`path ${path}`);
    const searchParams = useSearchParams();
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        console.log(`${path}?${params.toString()}`);
        return `${path}?${params.toString()}`;
    };
    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <PaginationItem>
                    <PaginationPrevious href={`${createPageURL(page - 1)}`} />
                    {/*<PaginationPrevious href={`${path}?page=${page - 1}`} />*/}
                </PaginationItem>)
                }
                {page > 1 && (
                <PaginationItem>
                    <PaginationLink href={`${createPageURL(page - 1)}`} >
                    {/*<PaginationLink href={`${path}?page=${page-1}`} >*/}
                        {page-1}
                    </PaginationLink>
                </PaginationItem>)
                }
                <PaginationItem>
                    <PaginationLink href={`${createPageURL(page)}`} isActive>
                    {/*<PaginationLink href={`${path}?page=${page}`} isActive>*/}
                        {page}
                    </PaginationLink>
                </PaginationItem>
                { page < totalPages && (
                <PaginationItem>
                    <PaginationLink  href={`${createPageURL(page + 1)}`}>{page +1}</PaginationLink>
                    {/*<PaginationLink  href={`${path}?page=${page+1}`}>{page +1}</PaginationLink>*/}
                </PaginationItem>)
                }
                { page < totalPages-2 && totalPages<498 && (
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>)
                }
                { page < totalPages && (
                    <PaginationItem>
                        <PaginationNext href={`${createPageURL(page + 1)}`} />
                        {/*<PaginationNext href={`${path}?page=${page + 1}`} />*/}
                    </PaginationItem>)
                }
            </PaginationContent>
        </Pagination>
    )
};

export default PaginationComponent;