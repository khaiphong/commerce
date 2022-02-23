/* 
 Copyright (c) 2017, 2018, 2019, 2020, 2021 KhaiPhong

 Licensed under the Apache License, Version 2.0 (the "License");

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 
 Each active user has its (1) own embedded Pdb on the client side, synchronized
 with distributed Pdb from MuHub and OmHub, (2) HTTPS and GraphQL servers from
 the pools of HTTPS and GraphQL to serve requested service, (3) Pod (Personal
 on-line data) server in OmHub, and (4) EIP to select and upgrade required
 services, (5) social apps in the clones of [ <b>facebook / twitter / linkIn</b> ]
 aka CHR "https://www.chathamhouse.org/about-us/chatham-house-rule"
 Chatham-House-Rule / Confidential HR ]
*/

package main

import "fmt"	
	
func main() {
  fmt.Println("Hello, 世界")
}

/*
Open embedded pdb, get HTTPS GraphQL servers, get Pod server from PersonaAI.
Ref: Kubernetes: Using containerd 1.1 without Docker
https://aboutsimon.com/blog/2018/07/17/Kubernetes-using-containerd-1.1-without-Docker.html 
*/
