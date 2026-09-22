import image from "../../../assets/images/image.png";
import schema from "../../../assets/images/schema.png";
import blogProfile from "../../../assets/images/blogProfile.png";
import blogpost from "../../../assets/images/blogPost.png";


const BlogProject = () => {
    return (
        <>
            <main className="flex flex-col w-9/10 m-auto gap-10">
            <div className="flex items-center w-3/5 mx-auto">
                <a
                    href="https://blog.eddiewiiknilsson.com"
                    className="p-5 bg-purple-500 mb-20 mx-auto rounded-xl font-bold cursor-pointer"
                >
                    Link to project
                </a>
                <a
                    href="https://github.com/eddiewn/blog"
                    className="p-5 bg-purple-500 mb-20 mx-auto rounded-xl font-bold cursor-pointer"
                >
                    Link to Github Repo
                </a>
                </div>
                <section className="flex flex-col lg:flex-row gap-10 justify-around">
                    <img
                        src={image}
                        alt=""
                        className="h-auto lg:max-w-1/2 w-full"
                    />
                    <div className="flex flex-col gap-5 lg:w-2/5 justify-center">
                        <h1 className="text-5xl text-violet-500 font-bold">
                            Overview
                        </h1>
                        <p className="text-2xl">
                            This project is a full-stack blogging platform where
                            users can create accounts and make posts. The posts
                            are done using Markdown and is stored inside a
                            Supabase Database. As of now you have to be Admin to
                            be able to make a post.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row-reverse gap-10 justify-around">
                    <img
                        src={schema}
                        alt=""
                        className="h-auto lg:max-w-1/2 w-full"
                    />
                    <div className="flex flex-col gap-5 lg:w-2/5 justify-center">
                        <h1 className="text-5xl text-violet-500 font-bold">
                            Why did I make it?
                        </h1>
                        <p className="text-2xl">
                            I made this project to get more experience working
                            with and setting up a fully-fledged Database and
                            Backend, working with the entire stack. This project
                            gave me alot of opportunities to build my own APIs,
                            securing the server for deployment and alot of third
                            party services such as Cloudflare R2 where I store
                            my images.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row gap-10 justify-around">
                    <img
                        src={blogProfile}
                        alt=""
                        className="h-auto lg:max-w-1/2 w-full"
                    />
                    <div className="flex flex-col gap-5 lg:w-2/5 justify-center">
                        <h1 className="text-5xl text-violet-500 font-bold">
                            What has been made?
                        </h1>
                        <ul className="text-2xl list-disc list-inside">
                            <li>User registration and authentication</li>
                            <li>Session-based authentication</li>
                            <li>Session stored in Database</li>
                            <li>CSRF protection</li>
                            <li>Blog creation and editing</li>
                            <li>Markdown rendering</li>
                            <li>Image uploads</li>
                            <li>Cloudflare R2 storage</li>
                            <li>And more!</li>
                        </ul>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row-reverse gap-10 justify-around">
                    <img
                        src={blogpost}
                        alt=""
                        className="h-auto lg:max-w-1/2 w-full object-contain"
                    />
                    <div className="flex flex-col gap-5 lg:w-2/5 justify-center">
                        <h1 className="text-5xl text-violet-500 font-bold">
                            Last but absolutely not least, challenges along the
                            way.
                        </h1>
                        <div className="text-2xl flex flex-col gap-5">
                            <p>
                                The first big challenge I ran into early was how
                                I was gonna store my images for the blogs. After
                                researching solutions I came across Amazon S3
                                for image storing, and I've heard about Amazon
                                Web Services before so I decided to go with that
                                route.
                            </p>

                            <p>
                                Getting it functional took alot of time to
                                understand, and I am not sure I still fully
                                understand it now either. After the image
                                storing problem was solved I took a long break
                                from the project, and when I came back my free
                                trail of AWS ran out! When I came back I had to
                                find another solution before continuing the
                                project which is where I found Cloudflare R2,
                                and that many object storage services are
                                compatible with S3! All my images and since then
                                stored on Clodudflare R2.
                            </p>
                            <p>
                                During this process I found my favorite data
                                type: <code>BLOB</code>, mostly because I love
                                the name.
                            </p>

                            <p>
                                I also had alot of problems with CSRF tokens.
                                Damn you "403: Invalid CSRF Token"
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogProject;
