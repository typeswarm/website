import { FC, ReactNode } from 'react';

export const FeatureArticle: FC<{ header: ReactNode; subheader: ReactNode }> =
    ({ subheader, header }) => (
        <article className="my-10">
            <div className="text-lg uppercase text-pink-700 font-light">
                {subheader}
            </div>
            <h2 className="text-5xl text-gray-700 my-4">{header}</h2>
        </article>
    );
