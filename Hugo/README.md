## Hugo server

Заходим

```
ssh user@192.168.1.110
```

Переходим

```
cd homlab-blog
```

Запускаем сервер

```
hugo server
```

В результате на  http://192.168.1.110/ и видим сайт вместо 502 Bad Gateway

---

Запускаем SSH-туннель для проброса через vps на домен https://exemple.com/

```
ssh -R 8080:localhost:80 root@103.71.20.34
```

---

Закрываем терминал

Заходим на  http://192.168.1.110/ и на домен https://exemple.com/ и снова видим 502 Bad Gateway

Переходим

```
sudo nano /etc/systemd/system/hugo-blog.service
```

Вставляем

```
[Unit]
Description=Hugo Blog Service
After=network.target

[Service]
Type=simple
User=user
WorkingDirectory=/home/user/homlab-blog
ExecStart=/usr/bin/hugo server --bind 127.0.0.1 --port 1313
Restart=always

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl daemon-reload
sudo systemctl restart hugo-blog
```

Снова заходим на http://192.168.1.110/ и видим снова сайт вместо 502 Bad Gateway

---

Запускаем SSH-туннель для проброса через vps на домен https://exemple.com/

Чтобы онпродолжал работать после закрытия терминала, запустите команду в таком виде:

```
ssh -f -N -R 8080:localhost:80 root@103.71.20.34
```


---

#### Объяснение изложенного выше:

Для того чтобы сайт продолжал работать после закрытия терминала, вам нужно запустить Hugo как фоновый процесс (демон).

Вот 3 способа, от самого быстрого до самого правильного:

1. Самый быстрый (использование `nohup`)

Эта команда игнорирует сигнал закрытия терминала и перенаправляет вывод в файл.

bash

```
nohup hugo server --bind 0.0.0.0 --port 1313 > hugo.log 2>&1 &
```

- `--bind 0.0.0.0` — позволит открывать сайт по IP малинки (если нужно).
- `> hugo.log 2>&1` — сохранит все логи в файл `hugo.log`.
- `&` — отправит процесс в фоновый режим.

**Как остановить:** `pkill hugo`

------

2. Через терминальный мультиплексор `screen` (удобно для отладки)

Это создает виртуальное окно терминала, которое не закрывается.

1. Запустите сессию: `screen -S blog`
2. Внутри запустите `hugo server`.
3. Нажмите сочетание клавиш **Ctrl + A**, затем **D** (отсоединиться).
4. Теперь можно закрывать терминал. Сайт будет работать.

**Как вернуться к процессу:** `screen -r blog`

------

3. Правильный способ (Systemd сервис) — **Рекомендуется**

Это заставит сайт запускаться автоматически даже после перезагрузки Raspberry Pi.

1. Создайте файл сервиса:

   bash

   ```
   sudo nano /etc/systemd/system/hugo-blog.service
   ```

   

2. Вставьте туда следующий текст (замените `user` на ваше имя пользователя):

   ini

   ```
   [Unit]
   Description=Hugo Blog Service
   After=network.target
   
   [Service]
   Type=simple
   User=user
   WorkingDirectory=/home/user/homlab-blog
   ExecStart=/usr/bin/hugo server --bind 127.0.0.1 --port 1313
   Restart=always
   
   [Install]
   WantedBy=multi-user.target
   ```

   *(Примечание: если используете порт 80, Hugo нужно запускать от root или разрешить использование портов ниже 1024).*

3. Запустите сервис:

   bash

   ```
   sudo systemctl daemon-reload
   sudo systemctl enable hugo-blog
   sudo systemctl start hugo-blog
   ```

   .

------

Важное замечание по портам:

В предыдущем вопросе вы пробрасывали порт `8080:localhost:80`.
Если ваш Hugo запущен на порту **1313** (как в логе), то команда для SSH-туннеля должна быть:

bash

```
ssh -f -N -R 8080:localhost:1313 root@103.71.20.34
```


Либо измените порт запуска Hugo на 80-й, если планируете использовать `8080:localhost:80`.

---

---



Чтобы SSH-туннель продолжал работать после закрытия терминала, используйте комбинацию флагов `-f` (фоновый режим) и `-N` (не выполнять команды).

Самый простой способ

Запустите команду в таком виде:

bash

```
ssh -f -N -R 8080:localhost:80 root@103.71.20.34
```



**Разбор флагов:**

- `-f`: Переводит SSH в фоновый режим сразу после ввода пароля.
- `-N`: Указывает не выполнять удаленные команды (нужно только для проброса портов).
- `-R`: Ваш проброс порта.

------

Рекомендуемый способ (авторестарт через `autossh`)

Обычный SSH-туннель разорвется при любой сетевой заминке. Чтобы туннель «поднимался» сам, используйте `autossh`.

1. **Установите его:**

   bash

   ```
   sudo apt update && sudo apt install autossh
   ```

   

2. **Запустите:**

   bash

   ```
   autossh -f -N -M 0 -R 8080:localhost:80 root@103.71.20.34
   ```

   

   *`-M 0` отключает собственный мониторинг autossh, полагаясь на стандартные настройки SSH.*

   

------

Важные советы:

1. **SSH-ключи:** Чтобы команда работала в фоне без запроса пароля (и автоматически запускалась после перезагрузки), настройте вход по ключу:

   bash

   ```
   ssh-copy-id root@103.71.20.34
   ```

   

2. **GatewayPorts:** Чтобы порт `8080` на удаленном сервере (103.71.20.34) был доступен из интернета, а не только локально внутри того сервера, в файле `/etc/ssh/sshd_config` на **удаленном** сервере должна быть строка:

   text

   ```
   GatewayPorts yes
   ```

   (После изменения файла нужно сделать `sudo systemctl restart ssh`).

3. **Как убить процесс:** Если нужно будет закрыть туннель, найдите его ID:

   bash

   ```
   pgrep -f "ssh -f -N -R 8080"
   kill [ID_процесса]
   ```

---

---


#### В локальной сети сайт работает а через тунель нет

```
user@rpi3-20231109:~$ reboot 
Call to Reboot failed: Access denied 
```

Ой, классика! Вы забыли 

**sudo**. Обычному пользователю в Linux не разрешено «выключать свет» без прав администратора.

```
sudo reboot
```



**Но подождите!** Прежде чем перезагружаться, учтите пару моментов:

1. **Туннель пропадет:** Ваша команда `ssh -f -N -R ...` работает только пока малина включена. После перезагрузки туннель **не поднимется сам**, и сайт снаружи снова перестанет открываться.
2. **Как проверить туннель сейчас:** Вместо перезагрузки попробуйте сначала проверить, «жива» ли связь, командой:

   ```
   ps aux | grep ssh
   ```

   Если там нет вашей строки с-R 8080`, значит, туннель упал и его надо просто запустить заново.

**Хотите, помогу сделать так, чтобы туннель сам запускался при включении Raspberry Pi (через systemd)?** Это гораздо надежнее, чем вводить команду вручную после каждого ребута.



 **Перезагрузка** роутера или Raspberry Pi могла сбросить активную сессию или изменить внешний IP.

Что нужно исправить:

1. **Разрешить внешние подключения (GatewayPorts):**
   Зайдите на свой удаленный сервер (`103.71.20.34`) и отредактируйте конфиг SSH:

   ```
   sudo nano /etc/ssh/sshd_config
   ```

   Найдите и измените (или добавьте) строку:
   **`GatewayPorts yes`**
   Затем перезапустите SSH на сервере: `sudo systemctl restart ssh`.

2. **Измените команду запуска туннеля:**
   Чтобы туннель «слушал» на всех интерфейсах удаленного сервера, добавьте пустой адрес перед портом (заметьте двоеточие перед 8080):

   ```
   ssh -f -N -R :8080:localhost:80 root@103.71.20.34
   ```

   Или явно укажите интерфейс: `ssh -f -N -R 0.0.0.0:8080:localhost:80 root@103.71.20.34`.

3. **Проверьте время (NTP):**
   Если вы меняли пояс на роутере, убедитесь, что на Raspberry Pi время не «уплыло». SSH-соединения критичны к синхронизации времени. Проверьте командой:

   ```
   date
   ```

   Если время неверное, туннель может обрываться по таймауту.

4. **Проверьте, поднят ли туннель:**
   После запуска команды на Raspberry Pi проверьте на **удаленном сервере**, открыт ли порт:

   ```
   netstat -tulnp | grep 8080
   ```

   Вы должны увидеть `0.0.0.0:8080` (а не `127.0.0.1:8080`).

    

**Совет:** После `reboot` ваш туннель, запущенный вручную, **не поднялся автоматически**. Чтобы он работал всегда, лучше добавить его в `systemd` сервис или использовать утилиту `autossh`.

Вы пробовали заходить по адресу `http://103.71.20.34:8080` после перезагрузки? Если туннель не запущен заново, сайт не откроется.



Что нужно сделать прямо сейчас:

1. **Зайдите на удаленный сервер:**

   bash

   ```
   ssh root@103.71.20.34
   ```

2. **Отредактируйте конфиг ТАМ:**

   bash

   ```
   sudo nano /etc/ssh/sshd_config
   ```

   Найдите `#GatewayPorts no`, уберите решетку и замените на:
   **`GatewayPorts yes`**

3. **Перезапустите SSH на сервере:**

   bash

   ```
   sudo systemctl restart ssh
   ```

4. **Вернитесь на Raspberry Pi и запустите туннель заново:**

   bash

   ```
   ssh -f -N -R :8080:localhost:80 root@103.71.20.34
   ```

   *(Двоеточие перед 8080 обязательно!)*

   

> Пока в конфиге стоит `GatewayPorts no`, сервер игнорирует ваши попытки открыть порт для интернета и «биндит» его только на внутренний адрес `127.0.0.1`.



В файле /etc/ssh/sshd_config на впс находится конфиг. Листайте до строки **98** (примерно середина файла) и меняйте её.

Что нужно сделать:

1. Найдите строку:
   `#GatewayPorts no`

2. Уберите решетку и напишите **yes**:
   **`GatewayPorts yes`**

3. Сохраните файл (`Ctrl+O`, затем `Enter`) и выходите из nano (`Ctrl+X`).

4. **Обязательно** перезапустите службу SSH на этом сервере:

   bash

   ```
   sudo systemctl restart ssh
   ```

Теперь вернитесь на Raspberry Pi и запустите туннель:

bash

```
ssh -f -N -R :8080:localhost:80 root@103.71.20.34
```

*(Важно: двоеточие перед 8080 говорит серверу слушать на всех IP, а GatewayPorts теперь это разрешит).*

**Почему это сработает:**
До этого момента ваш туннель «упирался в стену». Сервер видел порт 8080, но не выпускал его в интернет, считая его «секретным» только для внутреннего пользования. После смены `GatewayPorts` на `yes` порт станет публичным.



вот файл /etc/ssh/sshd_config на впс

```
# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/bin:/usr/bin:/bin:/usr/games

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes

# Expect .ssh/authorized_keys2 to be disregarded by default in future.
#AuthorizedKeysFile     .ssh/authorized_keys .ssh/authorized_keys2

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication yes
#PermitEmptyPasswords no

# Change to yes to enable challenge-response passwords (beware issues with
# some PAM modules and threads)
KbdInteractiveAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the KbdInteractiveAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via KbdInteractiveAuthentication may bypass
# the setting of "PermitRootLogin prohibit-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and KbdInteractiveAuthentication to 'no'.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no            <<<<<       GatewayPorts yes
X11Forwarding yes
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
PrintMotd no
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#PidFile /run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none

# no default banner path
#Banner none

# Allow client to pass locale environment variables
AcceptEnv LANG LC_*

# override default of no subsystems
Subsystem       sftp    /usr/lib/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       X11Forwarding no
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server
ClientAliveInterval 120
```

Получилось сохранить конфиг и **перезапустить ssh** на сервере?

