import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center rounded-2xl bg-blue-600 p-4 px-4 sm:justify-between sm:px-6 lg:flex-nowrap lg:px-8">
        <div class="mt-10 py-2 text-2xl font-semibold text-white lg:mt-0 lg:grow lg:basis-0">
          Heading
        </div>
      </div>
    </header>
  )
}
