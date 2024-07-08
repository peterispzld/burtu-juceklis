import styled from 'styled-components';
import { DOTS, usePagination } from './usePagination';

const PaginationContainer = styled.ul`
  padding: 0 !important;
  margin-bottom: 1rem;
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const PaginationItem = styled.li<{ selected?: boolean; disabled?: boolean }>`
  font-family: sans-serif;
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  background-color: ${({ selected }) =>
    selected ? 'rgba(0, 0, 0, 0.08)' : 'auto'};
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

const PaginationItemDots = styled(PaginationItem)`
  background-color: transparent;
  cursor: default;
`;

const Arrow = styled.div<{ direction: 'left' | 'right' }>`
  transform: ${({ direction }) =>
    direction === 'left' ? 'rotate(-135deg) translate(-50%)' : 'rotate(45deg)'};
  &::before {
    position: relative;
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;

// ul {
//     // padding-top: 1rem;
//     padding: 0 !important;
//   }

//   .pagination-container {
//     // margin-bottom: 2rem; // todo
//     display: flex;
//     list-style-type: none;
//     justify-content: center;
//     // flex-flow: wrap;

//     .pagination-item {
//       padding: 0 12px;
//       height: 32px;
//       text-align: center;
//       margin: auto 4px;
//       color: rgba(0, 0, 0, 0.87);
//       display: flex;
//       box-sizing: border-box;
//       align-items: center;
//       letter-spacing: 0.01071em;
//       border-radius: 16px;
//       line-height: 1.43;
//       font-size: 13px;
//       min-width: 32px;

//       &.dots:hover {
//         background-color: transparent;
//         cursor: default;
//       }
//       &:hover {
//         background-color: rgba(0, 0, 0, 0.04);
//         cursor: pointer;
//       }

//       &.selected {
//         background-color: rgba(0, 0, 0, 0.08);
//       }

//       .arrow {
//         &::before {
//           position: relative;
//           content: '';
//           /* By using an em scale, the arrows will size with the font */
//           display: inline-block;
//           width: 0.4em;
//           height: 0.4em;
//           border-right: 0.12em solid rgba(0, 0, 0, 0.87);
//           border-top: 0.12em solid rgba(0, 0, 0, 0.87);
//         }

//         &.left {
//           transform: rotate(-135deg) translate(-50%);
//         }

//         &.right {
//           transform: rotate(45deg);
//         }
//       }

//       &.disabled {
//         pointer-events: none;

//         .arrow::before {
//           border-right: 0.12em solid rgba(0, 0, 0, 0.43);
//           border-top: 0.12em solid rgba(0, 0, 0, 0.43);
//         }

//         &:hover {
//           background-color: transparent;
//           cursor: default;
//         }
//       }
//     }
//   }

import React from 'react';

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer className={className}>
      <PaginationItem
        // className={currentPage === 1 ? 'disabled' : ''}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <Arrow direction="left" />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItemDots key={pageNumber} disabled>
              &#8230;
            </PaginationItemDots>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        // className={currentPage === lastPage ? 'disabled' : ''}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <Arrow direction="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
