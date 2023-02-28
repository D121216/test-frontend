import Link from "next/link";
import clsx from "clsx";

export function MenuItem({ name, href, isActive }: any) {
  return (
    <Link href="#">
      <div
        className={clsx(
          `
            relative
            rounded-lg p-1 text-white text-base xl:text-lg inline-block font-SamsungOne600C font-normal
            after:content-[""] after:absolute after:bottom-0 after:left-2/4 after:right-2/4 after:h-[1px] after:bg-white after:transition-all after:duration-300
            hover:after:left-0 hover:after:right-0
          `,
          {
            "after:left-0 after:right-0": isActive,
          }
        )}
      >
        {name}
      </div>
    </Link>
  );
}
