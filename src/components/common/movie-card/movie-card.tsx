import React from "react";
import Votes from "../Votes";
import {
  StyledTile,
  ImageWrapper,
  Image,
  Title,
  SubTitle,
  TileContent,
  Details,
  DetailTitle,
  DetailContent,
  Tags,
  Tag,
  Description,
} from "./styled";

interface TileProps {
  mobile?: boolean;
  oversize?: boolean;
  person?: boolean;
  oversizepersontile?: boolean;
  detailsUrl: string;
  imageBaseUrl?: string;
  widths?: string;
  imageWidth?: string;
  sizes?: string;
  imagePath?: string;
  title: string;
  subtitle?: string;
  countries?: { name: string }[];
  releaseDate?: string;
  birthday?: string;
  birthPlace?: string;
  genreIds?: number[];
  genresList?: { id: number; name: string }[];
  rating?: number;
  votes?: number;
  overview?: string;
}

const MovieCard: React.FC<TileProps> = ({
  mobile,
  oversize,
  person,
  oversizepersontile,
  detailsUrl,
  imageBaseUrl,
  widths,
  imageWidth,
  sizes,
  imagePath,
  title,
  subtitle,
  countries,
  releaseDate,
  birthday,
  birthPlace,
  genreIds,
  genresList,
  rating,
  votes,
  overview
}) => {
  let genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];

  const convertDate = (input: string) => {
    const date = new Date(input).toLocaleDateString();
    return date;
  };

  return (
    <StyledTile
      to={detailsUrl}
      widths={widths || "100%"}
      oversize={oversize}
      person={person}
    >
      <ImageWrapper>
        <Image
          oversize={oversize}
          person={person}
          width={imageWidth}
          mobile={mobile}
          sizes={sizes}
          baseUrl={imageBaseUrl}
          path={imagePath}
          alt="image"
        />
      </ImageWrapper>
      <TileContent>
        <Title
          oversize={oversize}
          person={person}
        >
          {title}
        </Title>
        {subtitle &&
          <SubTitle
            oversize={oversize}
            person={person}
          >
            {subtitle}
          </SubTitle>
        }
        {countries && countries.length > 0 &&
          <Details>
            <DetailTitle>Production: </DetailTitle>
            <DetailContent>
              {countries && countries.map(({ name }) => name).join(", ")}
            </DetailContent>
          </Details>
        }
        {releaseDate &&
          <Details>
            <DetailTitle>Release date: </DetailTitle>
            <DetailContent>{convertDate(releaseDate)}</DetailContent>
          </Details>
        }
        {birthday &&
          <Details>
            <DetailTitle>Date of birth: </DetailTitle>
            <DetailContent>{convertDate(birthday)}</DetailContent>
          </Details>
        }
        {birthPlace &&
          <Details>
            <DetailTitle>Place of birth: </DetailTitle>
            <DetailContent>{birthPlace}</DetailContent>
          </Details>
        }
        {genreIds &&
          <Tags>
            {genres && genreIds && genreIds.map(genreId => (
              <Tag key={genreId}>
                {genres[genres.findIndex(
                  ({ id }) => id === genreId
                )]?.name}
              </Tag>
            ))}
          </Tags>
        }
        {genresList &&
          <Tags oversize >
            {genresList.map((item, index) => (
              <Tag oversize key={genresList[index].id}>
                {genresList[index]?.name}
              </Tag>
            ))}
          </Tags>
        }
        {!person && !oversizepersontile &&
          <Votes
            votes={votes ?? 0}
            rating={+(rating?.toFixed(1) ?? 0)} backdrop={""} />
        }
      </TileContent>
      {overview &&
        <Description>
          {overview}
        </Description>
      }
    </StyledTile>
  );
};

export default MovieCard;
