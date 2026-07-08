'use client'

import { useState, useEffect } from 'react'

/**
 * Detects if user is new by checking localStorage for a "hasVisited" flag
 * New users see simplified homepage, returning users see full dashboard
 */
export function useIsNewUser() {
  const [isNewUser, setIsNewUser] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('investwhat_has_visited')
    
    if (hasVisited) {
      setIsNewUser(false)
    } else {
      // Mark that user has visited
      localStorage.setItem('investwhat_has_visited', 'true')
      setIsNewUser(true)
    }
    
    setIsLoading(false)
  }, [])

  return { isNewUser, isLoading }
}
