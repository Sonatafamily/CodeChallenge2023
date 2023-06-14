import hashlib
import hmac
#first storee the message in a variable

aux = """¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.--'''''''''--.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.---.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.-----------.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.-----.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.-.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.-.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!.-.¡!p4wn3d¡!|¡!p4wn3d¡!.-.¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'-._|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|_.-'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!'-'¡!p4wn3d¡!|¡!p4wn3d¡!'-'¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\___/¡!p4wn3d¡!\___/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!_.-'¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!`-._¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.'¡!p4wn3d¡!_.--|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|--._¡!p4wn3d¡!'.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'¡!p4wn3d¡!_...-|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|-..._¡!p4wn3d¡!'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'.___.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!_|¡!p4wn3d¡!|_¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/\(¡!p4wn3d¡!)/\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!`¡!p4wn3d¡!'¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'-'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'-'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|-----|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.`/¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|/`.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!'._.'|¡!p4wn3d¡!.-.¡!p4wn3d¡!|'._.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!|¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/|¡!p4wn3d¡!|¡!p4wn3d¡!|\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.'_|¡!p4wn3d¡!|¡!p4wn3d¡!|_`.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!`.¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!|¡!p4wn3d¡!.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!¡!p4wn3d¡!|¡!p4wn3d¡!¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!.¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/o`.-'¡!p4wn3d¡!¡!p4wn3d¡!/¡!p4wn3d¡!\¡!p4wn3d¡!¡!p4wn3d¡!`-.`o\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!/o¡!p4wn3d¡!¡!p4wn3d¡!o\¡!p4wn3d¡!.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!`.¡!p4wn3d¡!/o¡!p4wn3d¡!¡!p4wn3d¡!o\¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!
¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!`.___.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!`.___.'¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!¡!p4wn3d¡!"""
# Then check the repeatitive pattern ¡!p4wn3d¡! 
# Removed it from the text to see what is left
# pattern seems to be some kind of ascii art so try to replace it with something that fills the space left
auxx = aux.replace('¡!p4wn3d¡!',' ')
print(auxx)

def write_string_to_file(filename, content):
    with open(filename, 'w') as file:
        file.write(content)

filename = "output.txt" 


write_string_to_file(filename, auxx)

