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
import {usePathname} from "next/navigation";


const PaginationComponent = ({page, totalPages}) => {
    let path = usePathname();
    console.log(path);
    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <PaginationItem>
                    <PaginationPrevious href={`${path}?page=${page - 1}`} />
                </PaginationItem>)
                }
                {page > 1 && (
                <PaginationItem>
                    <PaginationLink href={`${path}?page=${page-1}`} >
                        {page-1}
                    </PaginationLink>
                </PaginationItem>)
                }
                <PaginationItem>
                    <PaginationLink href={`${path}?page=${page}`} isActive>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                { page < totalPages && (
                <PaginationItem>
                    <PaginationLink  href={`${path}?page=${page+1}`}>{page +1}</PaginationLink>
                </PaginationItem>)
                }
                { page < totalPages-1 && (
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>)
                }
                { page < totalPages && (
                    <PaginationItem>
                        <PaginationNext href={`${path}?page=${page + 1}`} />
                    </PaginationItem>)
                }
            </PaginationContent>
        </Pagination>
    )
};

export default PaginationComponent;