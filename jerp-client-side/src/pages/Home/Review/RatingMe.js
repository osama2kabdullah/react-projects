import { Rating } from 'flowbite-react';
import React from 'react';

const RatingMe = ({rating}) => {
    return (
        <React.Fragment>
            {rating === "1" && (
              <Rating>
                <Rating.Star />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  1 out of 5
                </p>
              </Rating>
            )}
            {rating === "2" && (
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  2 out of 5
                </p>
              </Rating>
            )}
            {rating === "3" && (
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  3 out of 5
                </p>
              </Rating>
            )}
            {rating === "4" && (
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4 out of 5
                </p>
              </Rating>
            )}
            {rating === "5" && (
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5 out of 5
                </p>
              </Rating>
            )}
        </React.Fragment>
    );
};

export default RatingMe;