import React,{useState} from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const admindetails ={
        email : 'admin',
        password:'admin'
    };

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin =()=>{
        if(email === admindetails.email && password === admindetails.password){
            navigate('/admin/dashboard');
        }else{
            navigate('/');
        }
    }
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Card className="w-1/4">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email Id
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center bg-primary">
                            <span className="w-full border-t" />
                        </div>
                    </div>
                    <div className="grid gap-1.5" >
                        <Label htmlFor="email">Email </Label>
                        <Input id="email" type="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id ="password" type="password" placeholder="......" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={handleLogin} >Login</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Login
                // <a href="https://tenor.com/en-IN/view/sam-sulek-sam-sulek-gif-tik-tok-gymtok-gif-9739246323956231374">
                // </a>