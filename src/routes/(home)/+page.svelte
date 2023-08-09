<script>
  import me from "/static/me.jpg?run&width=250";
  import Img from "@zerodevx/svelte-img";
</script>

<div class="mx-auto container bg-background flex flex-nowrap mt-[4rem] h-auto w-fit">
  <div class="flex flex-col flex-wrap gap-10 mx-auto w-[70%]">
        <span class="font-merriweather border-2 border-dashed border-black text-2xl w-fit p-2">
            <h1>Liam is a <span class="font-bold">principal engineer</span> and <span class="font-bold">architect</span> <br /> building products,
            high-performance <br /> systems and teams.</h1>
        </span>
    <p class="font-poppins">I'm a seasoned engineer with 10+ years of experience in backend development,
      infrastructure, architectural design and leading engineering organisations.
      I focus on clean well thought out patterns, ensuring consistency across the stack and
      ultimately reducing the need for significant refactoring in the future.
    </p>

    <h2 class="font-merriweather font-bold">Want to <i>hire me</i> or fancy a chat?</h2>
    <p>
      I'm available for hire, consultation and mentoring. <br />
      Contact me on <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                       href="mailto:liam@lolletsoc.com">liam@lolletsoc.com</a>
    </p>

    <nav>
      <a class="btn btn-xl variant-filled-primary" href="/liam_costello_cv.pdf" rel="nofollow">Download CV</a>
    </nav>

  </div>
  <Img class="rounded-2xl ml-6 md:block hidden" src={me} alt="Picture of me" />
</div>
