<script>
    import me from "/static/me.jpg?run&width=250";
    import Img from "@zerodevx/svelte-img";
    import {base} from '$app/paths';
</script>

<div class="mx-auto container bg-background flex flex-nowrap mt-[2em] h-auto w-fit">
    <div class="flex flex-col flex-wrap gap-10 mx-auto max-w-[36em]">
        <span class="font-merriweather border-2 border-dashed border-black text-2xl w-fit p-2">
            <h1>Liam is a <span class="font-bold">principal engineer</span> and <span class="font-bold">architect</span> <br/> building products,
            high-performance <br/> systems and teams.</h1>
        </span>

        <p class="font-poppins">I'm a seasoned engineer with 10+ years of experience in backend development,
            infrastructure, architectural design and leading engineering organisations.
            I focus on clean well thought out patterns, ensuring consistency across the stack and
            ultimately reducing the need for significant refactoring in the future.
        </p>

        <nav>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                <a href="{base}/liam_costello_cv.pdf" rel="nofollow">Download CV</a>
            </button>
        </nav>

        <h2 class="font-merriweather font-bold">Want to <i>hire me</i> or fancy a chat?</h2>
        <p>
            I'm available for hire, consultation and mentoring. <br/>
            Contact me on <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                             href="mailto:liam@lolletsoc.com">liam@lolletsoc.com</a>
        </p>

    </div>
    <Img class="rounded-2xl ml-6 md:block hidden" src={me} alt="Picture of me"/>
</div>
