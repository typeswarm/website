import { CodeExample } from '../compo/CodeExample';
import { FeatureArticle } from '../compo/FeatureArticle';
//@ts-ignore
import codeExamples from '../data/code-examples.yaml';

export default function Home() {
    return (
        <div className="container mx-auto max-w-screen-lg">
            <h1 className="text-6xl mb-10">
                Easy and powerful TypeScript API for Docker Swarm
            </h1>
            <div className="text-lg">
                TypeSwarm allows flexible configuration, creating reusable
                plugins, automatic rotation of configs and secrets.
            </div>

            <div className="mt-5">
                <CodeExample source={codeExamples.main.source} />
            </div>

            <div className="flex mt-5">
                <button className="bg-pink-600 hover:bg-pink-700 border-pink-700 border-4 text-white px-6 py-2 rounded-lg font-extrabold text-lg ">
                    Get started
                </button>
                <kbd className="bg-gray-600 border-pink-700 border-4 text-white px-6 py-2 ml-5 rounded-lg font-extrabold text-lg">
                    yarn add @typeswarm/core @typeswarm/cli
                </kbd>
            </div>

            <div>
                <FeatureArticle
                    subheader="Dynamic"
                    header="Generate your services on the fly"
                />
                <FeatureArticle
                    subheader="Reusable"
                    header="Share complex configurations"
                />
                <FeatureArticle
                    subheader="Batteries Included"
                    header="Rotate configs and secrets automatically"
                />
            </div>
        </div>
    );
}
