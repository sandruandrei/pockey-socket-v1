namespace Framework {
    export module Utils {
        export function readCookie(c_name: string): string {
            if (document.cookie.length > 0) {
                let c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    let c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return (document.cookie.substring(c_start, c_end)).toString();
                }
            }
            return "";
        }

        export function writeCookie(name: string, value: any, days?: number) {
            let expires;
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        export function removeCookie(name: string) {
            writeCookie(name, "", -1);
        }
    }
}
