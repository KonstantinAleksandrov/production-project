import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { type FC, useState } from 'react'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

interface ISidebarProps {
    className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const { className } = props

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggleSidebar}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}
