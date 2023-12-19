import { NoVotesText, Rating, RatingScale, StyledLogo, VotesWrapper, VotesCount, RatingWrapper } from "./styled";
interface VotesProps {
    votes: number;
    rating: number;
    backdrop: string;
};

const Votes = ({ votes, rating, backdrop }: VotesProps) => (
    <VotesWrapper backdrop={backdrop} >
        {votes === 0 ?
            <NoVotesText>No votes yet</NoVotesText>
            :
            <>
                <RatingWrapper backdrop={backdrop} >
                    <StyledLogo backdrop={backdrop} >
                        <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1451 8.04083L16.0641 7.01183L12.9011 0.599825C12.8092 0.443683 12.6781 0.314249 12.5207 0.224324C12.3634 0.134399 12.1853 0.0870972 12.0041 0.0870972C11.8229 0.0870972 11.6449 0.134399 11.4875 0.224324C11.3302 0.314249 11.1991 0.443683 11.1071 0.599825L7.93814 7.01183L0.857139 8.04083C0.672479 8.06748 0.498959 8.14526 0.356195 8.26538C0.213431 8.3855 0.107117 8.54316 0.0492738 8.72054C-0.00856983 8.89792 -0.0156366 9.08794 0.0288724 9.26913C0.0733813 9.45032 0.167691 9.61544 0.301139 9.74583L5.42614 14.7398L4.21714 21.7928C4.18563 21.9767 4.2062 22.1658 4.27652 22.3386C4.34684 22.5114 4.46411 22.6611 4.61507 22.7708C4.76603 22.8804 4.94465 22.9457 5.13075 22.9591C5.31685 22.9725 5.50299 22.9337 5.66814 22.8468L12.0011 19.5178L18.3341 22.8468C18.4993 22.9337 18.6854 22.9725 18.8715 22.9591C19.0576 22.9457 19.2362 22.8804 19.3872 22.7708C19.5382 22.6611 19.6554 22.5114 19.7258 22.3386C19.7961 22.1658 19.8166 21.9767 19.7851 21.7928L18.5761 14.7398L23.7011 9.74583C23.8345 9.61557 23.9289 9.45061 23.9735 9.26957C24.0181 9.08853 24.0112 8.89862 23.9536 8.72129C23.896 8.54396 23.7899 8.38628 23.6474 8.26603C23.5049 8.14579 23.3316 8.06779 23.1471 8.04083H23.1451Z" fill="#FCD420" />
                        </svg>
                    </StyledLogo>
                    <Rating backdrop={backdrop}>{rating}</Rating>
                    <RatingScale backdrop={backdrop}>/ 10</RatingScale>
                </RatingWrapper>
                <VotesCount backdrop={backdrop}>
                    {votes}&nbsp;vote{votes > 1 ? "s" : ""}
                </VotesCount>
            </>}
    </VotesWrapper>
);

export default Votes;