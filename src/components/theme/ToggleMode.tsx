"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ToggleMode = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[theme]);

    if (!mounted) {
        return <Button variant="secondary" size="icon" disabled={true}></Button>;
    }

    const dark = theme === "dark";

    return (
        <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
        >
            {dark ? (
                <Moon className="hover:cursor-pointer hover:text-primary" />
            ) : (
                <Sun className="hover:cursor-pointer hover:text-primary" />
            )}
        </Button>
    );
};

export default ToggleMode;